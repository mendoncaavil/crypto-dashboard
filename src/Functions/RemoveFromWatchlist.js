export const removeFromWatchlist = (id) => {
    const previousList = localStorage.getItem("watchlist").split(",");
    const newList = previousList.filter((item)=> item!=id);
    console.log(newList.toString())
    localStorage.setItem(newList.toString());

} 