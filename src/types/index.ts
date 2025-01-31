export type Container = {
    id: number;
    name: string;
    parentContainer?: Container;
    childContainers: Container[];
};
export type Item = {
    id: number;
    name: string;
    containerId?: number;
};