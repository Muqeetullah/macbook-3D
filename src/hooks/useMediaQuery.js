import { useSyncExternalStore } from "react";

const getServerSnapshot = () => false;

const createSubscribe = (query) => (onStoreChange) => {
    if (typeof window === "undefined") return () => {};

    const mediaQuery = window.matchMedia(query);
    const listener = () => onStoreChange();

    mediaQuery.addEventListener("change", listener);

    return () => mediaQuery.removeEventListener("change", listener);
};

const createSnapshot = (query) => () => {
    if (typeof window === "undefined") return false;

    return window.matchMedia(query).matches;
};

const useMediaQuery = (query) => {
    return useSyncExternalStore(
        createSubscribe(query),
        createSnapshot(query),
        getServerSnapshot
    );
};

export default useMediaQuery;
