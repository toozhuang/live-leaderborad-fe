import {render, screen} from "@testing-library/react"
import PlayerBoard from "./index";


test("Renders Player Board", () => {
    const item = {
        id: '123',
        name: 'test',
        score: 100
    }
    render(<PlayerBoard playScoreDetail={item}/>);
    const linkElement = screen.getByText(item.name);
    expect(linkElement).toBeInTheDocument();
});


