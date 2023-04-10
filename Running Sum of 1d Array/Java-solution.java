
  /* 
  APPROACH TO ACHIEVE
    1.looping the input array from second to last element
    2. updating the current element with sum of current element and previous element value at each loop
  */

  /* 
  NOTE:
    not working on the parameter as there is a chance of
    modifying actual input argument array value which might be needed
    for further operations
  */

class Solution {
    public int[] runningSum(int[] nums) {
        int cloned[] = nums.clone();

        for (int i = 1; i < cloned.length; i++) {
            cloned[i] += cloned[i-1];
        }
        return cloned;
    }
}