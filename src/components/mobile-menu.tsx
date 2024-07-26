import Link from 'next/link';
import MobileItem from './mobile-item';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-dark lg:hidden"
        >
          <div className="flex flex-col h-full">
            <div className="flex flex-row lg:px-[60px] md:px-[40px] px-[20px] h-[70px] w-[100vw] justify-between items-center border-b-[1px] border-dark bg-dark z-10">
                <Link href="/" onClick={onClose}><img src="/light-long.svg" alt="uizardry logo" className="w-[110px]"/></Link>
                <button onClick={onClose} className="py-[7px] px-[18px] gap-[10px] rounded-[8px] bg-darkLighter shadow-buttonIdle hover:shadow-buttonHover transition-shadow duration-300 inline-flex lg:hidden items-center">
                    Menu
                </button>
            </div>

            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              className='flex flex-col'
            >
              <ul className="flex flex-col gap-[5px] p-[20px]">
                <li onClick={onClose}><MobileItem linkTo="/" iconUrl="/menu-webovy-audit.svg" >Webový audit</MobileItem></li>
                <li onClick={onClose}><MobileItem linkTo="/" iconUrl="/menu-tvorba-webu.svg">Tvorba webu</MobileItem></li>
                <li onClick={onClose}><MobileItem linkTo="/" iconUrl="/menu-seo.svg">SEO</MobileItem></li>
                <li onClick={onClose}><MobileItem linkTo="/" iconUrl="/menu-telefon.svg">Kontakt</MobileItem></li>
              </ul>
              <button onClick={onClose} className="py-[7px] px-[18px] gap-[10px] rounded-[8px] bg-darkLighter shadow-buttonIdle hover:shadow-buttonHover transition-shadow duration-300 flex items-center justify-center mx-[20px]">
                <img src="/blog-icon.svg" alt="blog icon" />
                Blog
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;