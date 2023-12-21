export const Header = ({title}: {title: string}) => {
  return (
    <div className='bg-blue-600 py-5 px-4 text-white'>
        <nav className="flex justify-between">
            <div>
                <h1 className='font-bold'>{title.toUpperCase()}</h1>
            </div>
            <div> 
              
            </div>
        </nav>
    </div>
  )
}
