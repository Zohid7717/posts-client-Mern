import React from 'react';

const AddPostPage = () => {
  return (
    <form
      className='w-1/3 mx-auto py-10'
      onSubmit={(e) => e.preventDefault()}
      
    >
      <label className='text-gray-300 py-2 bg-gray-600 text-xs mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer'>
        Прикрепить изображения:
        <input type="file" className='hidden'/>
      </label>
      <div className="flex object-cover py-2">img</div>
      <label className="text-xs text-white opacity-70">
        Загаловок поста:
        <input
          type="text"
          placeholder='Загаловок'
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <label className="text-xs text-white opacity-70">
        Техт поста:
        <textarea
          placeholder='Техт'
          className="resize-none h-40 mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <div className="flex text-black gap-8 items-center justify-center mt-4">
        <button className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm py-2 px-4">
          Добавить пост
        </button>
        <button className="flex justify-center items-center bg-red-500 text-xs text-white rounded-sm py-2 px-4">
          Отменить
        </button>
      </div>
    </form>
  );
}

export default AddPostPage;
