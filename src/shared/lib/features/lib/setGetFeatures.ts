import { FeatureFlags } from '@/shared/types/featureFlags';

let featureFlags: FeatureFlags = {};

export const setFeatureFlags = (newFeatureFlags?: FeatureFlags) => {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
};

export const getFeatureFlag = (flag: keyof FeatureFlags) => {
    return featureFlags[flag];
};

export const getAllFeatureFlags = () => {
    return featureFlags;
};
