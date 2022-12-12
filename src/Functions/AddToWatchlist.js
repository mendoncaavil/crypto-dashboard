export const addToWatchlist = (id) => {
    const previousList = localStorage.getItem("watchlist");
    console.log("Adding to watchlist...", id);
    if (!previousList || !previousList.includes(id)) {
      localStorage.setItem("watchlist", `${previousList},${id}`);
    } else {
      alert("Already Added!");
    }
  };