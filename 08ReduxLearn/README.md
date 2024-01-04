# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Lessons Learnt

# Steps to Work with Redux ToolKit
## -> Step 1: First Create Store File for Redux
      ( Its Main Work is to configure store -> Note Store can only be changed by the defined reducers)
      
## -> Step 2: Create Reducers/Slice (functions) for Store
  -> It has intialState (Object that stores initial state of your data / format)
  -> createSlice ->(We pass Object in createSlice 
   it Contains:
   ->name:"name_of_ur_slice",
   ->initialstate
   ->reducers:{
   ---->(reducers stores the all the functions that you want to use globally just like context API, but the only change is that here we have to define whole functioning of function, Eg:-)
      addItem:(state,actions)=>{
      //state and payload are provided by reducers 
      // state contains intitalstate
      // actions are related to the parameters that we pass inside the function when using it can be accessed by action.payload
        const todo = {
        id: nanoid(),
        text: action.payload,
        isEdit: false,
      };
      state.todos.push(todo); //Pushes in state
      }
      updateItem:(state,action)=>{
      //...todo brings whole object remember it.
        state.todos=state.todos.map((todo)=>todo.isEdit ? {...todo,text:action.payload,isEdit:false}:);
      };
   })

## -> Step 3
        export all the reducers indiviually 
        (eg:)
        export const { addTodo, removeTodo, updateTodo, editTodo } = todoSlice.actions;

## -> Step 4
        export reducer for store 
        export default todoSlice.reducer;


      -> Now Use of useSelector and useDispatch 
      

   
