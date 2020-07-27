export function setStorage(key, value) {
    localStorage[key] = value;
};

export function getStorage(key, value) {
    return localStorage[key];
};