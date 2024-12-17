function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  const minHeap: [number, number, number][] = [];
  const result: number[][] = [];

  // Initialize the heap with the first element from nums1 paired with every element in nums2
  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    minHeap.push([nums1[i] + nums2[0], i, 0]);
  }

  // Function to maintain the heap property
  const heapify = (heap: [number, number, number][], i: number, n: number) => {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && heap[left][0] < heap[smallest][0]) {
      smallest = left;
    }
    if (right < n && heap[right][0] < heap[smallest][0]) {
      smallest = right;
    }
    if (smallest !== i) {
      [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
      heapify(heap, smallest, n);
    }
  };

  // Build the initial heap
  for (let i = Math.floor(minHeap.length / 2) - 1; i >= 0; i--) {
    heapify(minHeap, i, minHeap.length);
  }

  while (k > 0 && minHeap.length > 0) {
    const [sum, i, j] = minHeap[0];
    result.push([nums1[i], nums2[j]]);
    k--;

    if (j + 1 < nums2.length) {
      minHeap[0] = [nums1[i] + nums2[j + 1], i, j + 1];
    } else {
      minHeap[0] = minHeap.pop()!;
    }

    heapify(minHeap, 0, minHeap.length);
  }

  return result;
}
