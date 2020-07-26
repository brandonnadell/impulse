export function set(key, value) {
    localStorage[key] = value;
};

export function get(key, value) {
    return localStorage[key];
};