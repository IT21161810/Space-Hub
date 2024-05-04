import { render,screen } from "@testing-library/react";
import { describe,it } from "vitest";
import ErrorMessage from "./ErrorMessage.jsx";


describe('ErrorMessage',() => {
    it('renders default error state',() =>{
        render(<ErrorMessage/>)
        screen.debug()
    })
}) 