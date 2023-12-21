export const Container = ({children}: {children: React.ReactNode}) => {

    return (
        <main className="flex flex-col justify-center items-center">
            {children}
        </main>
    )
}

