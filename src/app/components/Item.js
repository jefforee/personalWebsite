import Image from 'next/image';

const Item = ({ image, name }) => {
    return (
        <div className='image-wrapper bg-[#C28569] rounded-md flex self-start justify-center items-center p-2'>
            {image ? (
                <Image
                    src={image}
                    className='w-[24px] sm:w-[2.5vw] aspect-square max-h-full object-contain'
                    style={{ imageRendering: 'pixelated' }}
                    alt="Inventory Plant"
                    unoptimized
                />
            ) : (
                <div className='w-[24px] sm:w-[2.5vw] aspect-square flex items-center justify-center rounded'>
                </div>
            )}
            {/* Hover Description */}
            <div class="text-xs sm:text-base bottom-[45px] sm:bottom-[55px] inv-description px-2">{name}</div>

        </div>
    );
};

export default Item;


