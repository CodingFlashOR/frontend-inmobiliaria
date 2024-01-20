interface SideBarProps {
  setOpen: (value: boolean) => void;
  open: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ setOpen, open }) => {
  return (
    <div
      className={`bg-white min-h-screen transition-all duration-300 fixed top-0 left-0 ${
        open ? 'sm:w-80 w-52' : 'w-0'
      }`}
    >

      <div
        className={`bg-amarillo-cream h-5 w-full ${
        open ? 'sm:w-80 w-52' : 'w-0'
    }`}
      />

      <button
        className={`${
          open ? '' : 'hidden'
        }`}
        onClick={() => {
          setOpen(false)
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className={`w-6 h-6 ${
            open ? '' : 'hidden'
          }`}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18 18 6M6 6l12 12'
          />
        </svg>
      </button>

    </div>
  )
}

export default SideBar
