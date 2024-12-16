function solution(nums) {
    const newSet=new Set(nums).size
    const half=nums.length/2; 

    return Math.min(newSet, half)
}