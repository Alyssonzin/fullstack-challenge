export default function Footer() {
    return (
        <footer className="relative bottom-0 w-full">
          <div className="container mx-auto py-4 text-center text-sm text-slate-500">
            <p>
              Cinema LTDA <br/>
              &copy; {new Date().getFullYear()} Cinema. All rights reserved.
            </p>
          </div>
        </footer>
    )
}