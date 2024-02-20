export const Favorite = (favoriteList) => {
    return (
        <div>
            <h1>Favorites</h1>
            <ul>
                {favoriteList.map(listItem => {
                    return <li>
                        <button>delete recipe</button>
                        <img src={listItem.src} alt={listItem.alt} />
                        <h2>{listItem.name}</h2>
                        <p>{listItem.description}</p>
                        <button>See recipe</button>
                       </li> 
                })}
            </ul>
        </div>
    )
}