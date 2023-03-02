const loadAllCategory = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`
    try{
        const res = await fetch(url)
        const data = await res.json()
        // fetch = data.data
        displayAllCategory(data.data);
    }
    catch(error){
        console.log(error)
    }
}

// show all category 
const displayAllCategory = categories =>{
    const showAllCategoryContainer = document.getElementById('show-all-category')
    categories.news_category.forEach(category => {
        const {category_id, category_name} = category;
        showAllCategoryContainer.innerHTML += `
        <a onclick="loadSingleCategoryNews('${category_id}', '${category_name}')" class="text-1xl hover:bg-stone-100 block cursor-pointer py-2 px-3 rounded-md">${category.category_name}</a>
        `
    });

}

// show all news in a category 

const loadSingleCategoryNews = (categoryId, categoryName) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
        // fetchData = data.data;
        displaySingleCategoryNews(data.data)
        
    });
}


// display single category newses 
const displaySingleCategoryNews = allNews =>{
    const allNewsContainer = document.getElementById('all-news-container')
    allNewsContainer.innerHTML = '';
    allNews.forEach(news => {
        const { title, category_id, total_view, details, image_url, author} = news;
        const {name, published_date, img} =  author;
        // const sohortDescription = details.slice(0, 50);
        allNewsContainer.innerHTML += `
        <div class="p-5 mx-auto rounded-md w-10/12 bg-base-200">
        <div class=" flex lg:flex-row">
          <img src="${image_url}" class="max-w-sm rounded-lg shadow-2xl" />
          <div class=" flex flex-col justify-between py-2 px-6">
          <div class="">
            <h1 class="text-2xl font-bold">${title}</h1>
            <p class="py-3">${details.slice(0, 200)}...</p>
            
          </div>
            <div class="flex justify-between ">
                <div class="flex items-center gap-2">
                    <img class="rounded-full w-9 h-9" src="${img}" alt="">
                    <div>
                        <p>${name}</p>
                        <p>${published_date} </p>
                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-eye"></i> <span>${total_view}</span>
                </div>
                <div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div><i class="fa-solid fa-arrow-right"></i></div>
            </div>
          </div>
        </div>
      </div>
        `;
        // console.log(name, published_date);
    });
}

// loadSingleCategoryNews()
// loadAllCategory();

loadAllCategory()