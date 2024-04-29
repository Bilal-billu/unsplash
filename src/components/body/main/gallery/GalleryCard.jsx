import PropTypes from 'prop-types';

export default function GalleryCard({ item }) {
    return (
        <div className={`row-span-1 ${item.styling} w-full bg-slate-300`}>
            <div className='w-full bg-slate-500 h-full flex overflow-hidden'>
                <img src={item.src} alt={item.alt} className=' w-full object-cover' />
            </div>
        </div>
    )
}

GalleryCard.propTypes = {
    item: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string,
        styling: PropTypes.string
    })
}
