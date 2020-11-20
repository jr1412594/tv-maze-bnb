import Card from './Card'

export default function CardContainer(props) {

    const eachTvShow = () => {
        return props.tvShows.map(
            tvShow => {
                return (
                    <Card tvShow={ tvShow } />
                )
            }
        )
    }
    
    return (
        <div className="show-card">
                { eachTvShow() }
        </div>
    )
}
