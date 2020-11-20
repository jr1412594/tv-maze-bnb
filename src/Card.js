export default function Card({ tvShow }) {

    const { name, status, image } = tvShow

    return (
        <div className="card">
            <img src={ image.medium } alt=''/>
            <h2>{ name }</h2>
            <h3>{ status }</h3>
        </div>
    )
}

