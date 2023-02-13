Summary

In this section, we see the basics of Redux and build our first redux application.

#### 🚀How redux work?

-   We store all our application state (data) in a single place called Store. Imagine Store as Database for frontend.

-   There are 3 main parts of Redux

    -   Store - which stores all data

    -   Reducer - function which will add, update and delete data (How to do)

    -   Actions - which will define which task we want to perform (What to do)

-   We can only change store data using the Reducer function.

-   For example, we have a to-do application. We want to add a new task. So

    -   Action - ADD_TASK

    -   Reducer - perform how to add task in the store

#### 📌4 steps to implement Redux:

-   Designing the store - How store object looks like

-   List actions - that can perform in the application.

-   Create Reducer - function to define How to perform that action

-   Create redux store

#### 💻Creating Reducer function:

-   A reducer is a pure function that takes two arguments. The first one is the Initial or Current state and the second one is the action object.

-   Inside this function, we use If..else or we can use Switch case to identify the action type.

```js
1.  let id =  0;

export  default  function reducer(state =  [], action)  {
    switch  (action.type)  {
        case ADD_TASK:
            return  [
                ...state,
            {
                id:  ++id,
                task: action.payload.task,
                completed:  false,
            },
        ];

        case REMOVE_TASK:
            return state.filter((task)  => task.id !== action.payload.id);

        case TASK_COMPLETED:
            return state.map((task)  =>
                task.id === action.payload.id
                    ?  {
                        ...task,
                        completed:  true,
                    }
                    : task
                );

        default:
            return state;
    }
}
```

#### 📜Configure redux store

-   For creating a redux store we have a function in the redux library called createStore and we have to just pass our Root reducer as a parameter.

```js
import  { legacy_createStore as createStore }  from  "redux";
import reducer from  "./tasks";

const store = createStore(reducer);

export  default store;
```

#### 🧑🏻‍💻Dispatch action from store

-   For dispatching any action, we have to use store.dispatch method and then we pass our action object with type property (which is the action name) and payload property (in which we can pas data related to action).

```js
store.dispatch({ type:  "ADD_TASK", payload:  { task:  "Add new task"}  });
```

#### 🔔Subscribe and unsubscribe method

-   As we use Subscribe feature on YouTube, store.subscribe method is also used to get notified when we have something change in our store object.

```js
store.subscribe(()  =>  {
    console.log("Updated", store.getState());
});
```

-   This callback function will run on every change on the redux store.

-   Now if we want to stop this subscribe method we have to use unsubscribe.

```js
const unsubscribe = store.subscribe(()  =>  {
    console.log("Updated", store.getState());
});
unsubscribe();
``````