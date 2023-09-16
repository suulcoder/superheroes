import Card from "./Card"

export default interface RootState {
    isCollapsed: boolean,
    query: string,
    superheroes: {
      data: Array<Card>
      favorites: Array<number>
      last_liked: number
      isLoading: boolean,
    }
  }