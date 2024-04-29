import { Icon } from "@iconify/react/dist/iconify.js"
import PropTypes from 'prop-types';

export default function Searchbar({classes}) {
    return (
        <div className={`${classes} flex py-2 px-4 items-center text-zinc-500`}>
                <div className=''>
                    <Icon icon="majesticons:search-line" />
                </div>
                <div className='w-full px-3'>
                    <input type='text' className='w-full bg-transparent border-0 focus:outline-none'
                        placeholder='Search high-resolution images'
                    />
                </div>
                <div className=''>
                    <Icon icon="material-symbols:control-camera-rounded" />
                </div>
            </div>
    )
}

Searchbar.propTypes  = {
    classes: PropTypes.string.isRequired
}