import {fireEvent, render,screen} from "@testing-library/react";
import App from "./App";
import { MemoryRouter, Routes, Route } from 'react-router-dom';
// import FunctionalTesting from "./FunctionalTesting";
// import handleOtherMethod from "./Helper";
// // beforeAll(()=>{
//   console.log("****before al Hook***")
// })
// beforeEach(()=>{
//   console.log("****before al Hook***")
// })

// test("Testing First React App Case",()=>{
//   render(<App/>);
//   const text= screen.getByText(/First React Test case/i);
//  const title = screen.getByTitle("Cat img")
//   const text2=screen.getByText("Hello")
// expect (text).toBeInTheDocument();
// expect (text2).toBeInTheDocument();
// expect(title).toBeInTheDocument();
// })

// test("Testing Input Box",()=>{
//   render(<App/>)
// let checkInput = screen.getByRole("textbox");
// let checkInputPlaceholder = screen.getByPlaceholderText("Enter User name");
// expect(checkInputPlaceholder).toBeInTheDocument();
// expect (checkInput).toBeInTheDocument();
// expect(checkInput).toHaveAttribute("name","username")
// expect(checkInput).toHaveAttribute("id","userId")
// expect(checkInput).toHaveAttribute("type","text")
// expect(checkInput).toHaveAttribute("value","Ankush Kaur")
// });


// test("On change event Testing",()=>{
//   render(<App/>)
//   let input = screen.getByRole("textbox");
//   fireEvent.change(input,{target:{value:"abc"}});
//   expect(input.value).toBe("abc");
// })

// describe.only("oN cLICK tEST",()=>{

//   test("Onclick button test",()=>{
//   render(<App/>)
//   let button = screen.getByRole("button");
//   fireEvent.click(button);
//   expect(screen.getByText("updated DATA")).toBeInTheDocument();
//   })
// })


// test("snapshot testing",()=>{
// const view = render(<App/>)
// expect (view).toMatchSnapshot();
// })

// test("method Testing case 1",()=>{
//   render(<FunctionalTesting/>);
//   const btn= screen.getAllByTestId("btn1");
//   fireEvent.click(btn);
//   expect(screen.getByAltText("hello")).toBeInTheDocument();
// })


// test("method testing case2",()=>{
// expect(handleOtherMethod
//   ()).toMatch("hi")
// }
// )
// test ("get by role",()=>{
// render(<FunctionalTesting/>);
// const inputFiled= screen.getByRole("textbox")
// const btn = screen.getByRole("button");
// expect(inputFiled).toBeInTheDocument();
// expect(inputFiled).toHaveValue("hello");
// expect(inputFiled).toBeDisabled();
// expect (btn).toBeInTheDocument();
// })

  
// mocking of components 
jest.mock('./Components/StudentList', () => () => <div>StudentList Component</div>);

describe("testing Routing of whole App",()=>{
 test("Rendering Student Componennt on Root path",()=>{
 render(  <MemoryRouter initialEntries={['/']}>
     <App />
   </MemoryRouter>)
 })
expect(screen.getByText("StudentList Component")).toBeInTheDocument();
}
)
