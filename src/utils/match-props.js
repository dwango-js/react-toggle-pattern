// LICENSE : MIT
"use strict";
export function matchAnd(keys, parentProps, childProps) {
    const childKeys = Object.keys(childProps);
    // all match
    return keys.every(parentKey => {
        return childKeys.some(childKey => {
            if (parentKey !== childKey) {
                return false;
            }
            const parentValue = parentProps[parentKey];
            const childValue = childProps[childKey];
            if (childValue === parentValue) {
                return true
            } else if (childValue === undefined && parentKey === true) {
                // <X attr />
                return true;
            }
            return false;
        });
    });
}
export function matchOr(keys, parentProps, childProps) {
    const childKeys = Object.keys(childProps);
    // some match
    return keys.some(parentKey => {
        return childKeys.some(childKey => {
            if (parentKey !== childKey) {
                return false;
            }
            const parentValue = parentProps[parentKey];
            const childValue = childProps[childKey];
            if (childValue === parentValue) {
                return true
            } else if (childValue === undefined && parentKey === true) {
                // <X attr />
                return true;
            }
            return false;
        });
    });

}