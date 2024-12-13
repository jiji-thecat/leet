function findKthLargest(nums: number[], k: number): number {
  if (nums.length === 1) {
    return nums[0]; // TODO: revisit
  }

  const len = nums.length - k;
  // const quickSort = (i: number, j: number): number => {
  //     if(i>=j){
  //         return nums[i];
  //     }
  //     const pivot = nums[j];

  //     let l = i - 1;
  //     let r = j;

  //     while (l<r) {
  //         while (nums[++l] < pivot);
  //         while (l < --r && nums[r] > pivot);

  //         if (l >= r) {
  //             break;
  //         }

  //         [nums[l], nums[r]] = [nums[r], nums[l]];
  //     }
  //     [nums[l], nums[j]] = [nums[j], nums[l]];

  //     if (len === l) {
  //         return nums[l];
  //     } else if (l < len) {
  //         return quickSort(l + 1, j);
  //     } else {
  //         return quickSort(i, l - 1);
  //     }
  // }

  // return quickSort(0, nums.length - 1);
  const quick = (i: number, j: number): number => {
    if (i >= j) {
      return nums[i];
    }
    const pivot = nums[j];
    let l = i - 1;
    let r = j;

    while (l < r) {
      while (nums[++l] < pivot);
      while (l < --r && nums[r] > pivot);

      if (l >= r) {
        break;
      }
      [nums[l], nums[r]] = [nums[r], nums[l]];
    }

    [nums[j], nums[l]] = [nums[l], nums[j]];
    if (l === len) {
      return nums[l];
    } else if (l < len) {
      return quick(l + 1, j);
    } else {
      return quick(i, l - 1);
    }
  };

  return quick(0, nums.length - 1);
}
