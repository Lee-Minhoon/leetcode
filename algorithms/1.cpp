class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
        vector<int> result;
        unordered_map<int, int> cache;

        for(int i = 0; i < nums.size(); i++) {
            int diff = target - nums[i];
            if (cache.find(diff) != cache.end()){
                result.push_back(i);
                result.push_back(cache[diff]);
                return result;
            }

            cache[nums[i]] = i;
        }

        return result;
    }
};