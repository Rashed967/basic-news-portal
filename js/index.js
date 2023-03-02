const loadAllCategory = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    try{
        const res = await fetch(url)
        const data = await res.json()
        fetch = data.data
        displayAllCategory(data.data.news_category);
    }
    catch(error){
        console.log(error)
    }
}

// show all category 
const displayAllCategory = categories =>{
    const showAllCategoryContainer = document.getElementById('show-all-category')
    categories.forEach(category => {
        showAllCategoryContainer.innerHTML += `
        <a class="text-1xl hover:bg-stone-100 block cursor-pointer py-2 px-3 rounded-md">${category.category_name}</a>
        `
    });

}


loadAllCategory();