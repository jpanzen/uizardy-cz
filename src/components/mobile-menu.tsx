import Link from 'next/link';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
  }

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-dark z-50 lg:hidden">
      <div className="flex flex-col h-full">
        <div className="flex flex-row lg:px-[60px] md:px-[40px] px-[20px] h-[70px] w-[100vw] justify-between items-center border-b-[1px] border-dark">
            <Link href="/"><img src="/light-long.svg" alt="uizardry logo" className="w-[110px]"/></Link>
            <button onClick={onClose} className="py-[7px] px-[18px] gap-[10px] rounded-[8px] bg-darkLighter shadow-buttonIdle hover:shadow-buttonHover transition-shadow duration-300 inline-flex lg:hidden items-center">
                Menu
            </button>
        </div>
        
        <ul className="flex flex-col gap-6">
          <li><Link href="/" onClick={onClose}>Webový audit</Link></li>
          <li><Link href="/" onClick={onClose}>Tvorba webu</Link></li>
          <li><Link href="/" onClick={onClose}>SEO</Link></li>
          <li><Link href="/" onClick={onClose}>Kontakt</Link></li>
          <li><Link href="/" onClick={onClose}>Blog</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;