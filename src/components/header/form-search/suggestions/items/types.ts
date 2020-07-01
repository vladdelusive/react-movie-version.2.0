export interface ISearchItem {
    image: string | null,
    title: string,
    typeItem: string,
    id: number,
    setShowSearchedItems(bool: boolean): void
}