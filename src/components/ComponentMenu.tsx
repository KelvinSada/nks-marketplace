import { useContext } from "react"
import type { apiDataType } from "../types"
import { AppContext } from "../Context"

const ComponentMenu = ({data:items}:{data:apiDataType[]}) => {
  const {SelectedCategory:{selectedCategory,setSelectedCategory}} =useContext(AppContext)
  
    const categoryArray:string[] = []

    if (items){
      items.forEach(item=>{
        if (!categoryArray.includes(item.category)){
          categoryArray.push(item.category)
        }else{ null }
      })
    }

    function handleCategoryClick(item:string){
      setSelectedCategory(item)
    }
    console.log(selectedCategory)
  return (
    <>
    <ul className="flex p-3 align-middle text-center justify-center border-4 space-x-6 border-b border-gray-200">
  {
    categoryArray.map((item, index) => {
      return(
        <li 
          key={index}
          className={`
            relative pb-3 cursor-pointer transition-all duration-200
            text-gray-600 hover:text-gray-900
            ${item === selectedCategory 
              ? 'text-blue-600 font-medium' 
              : ''
            }
          `}
          onClick={() => handleCategoryClick(item)}
        >
          {item}
          {/* Active indicator line */}
          {item === selectedCategory && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
          )}
        </li>
      )
    })
  }
</ul>
    </>
  )
}

export default ComponentMenu
