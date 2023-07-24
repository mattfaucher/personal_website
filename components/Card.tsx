export default function Card({ title, content, url }: { title: string, content: string, url: string }) {
  return (
    <div className='w-5/6 p-6 justify-center justify-self-center mx-auto bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 my-2 relative'>
      <div className='flex items-baseline pb-2 space-x-2'>
        <a href={url} target='_blank' rel='noreferrer'>
          <button className='bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-.5 px-2 border border-blue-500 hover:border-transparent rounded'>
            Code
          </button>
        </a>
        <h5 className='mb-2 md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-md'>
          {title}
        </h5>
      </div>
      <p className='max-w-80 h-auto mb-3 font-normal text-gray-700 dark:text-gray-400'>
        {content}
      </p>
    </div>
  );
}
