import { appartements } from '../../datas/appartements'

function DisplayCards() {
    return (
        <ul>
            {appartements.map(({ id, title, cover }) => 
            <li key={id}>
                title={title},
                cover={cover}
            </li>
            )}
        </ul>

    )

}

export default DisplayCards