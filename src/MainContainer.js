import CardContainer from './CardContainer'

export default function MainContainer(props) {

    return (
        <div>
            <CardContainer tvShows={ props.birds } />
        </div>
    )
}
