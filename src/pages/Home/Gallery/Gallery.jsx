import SectionTitle from '../../../components/SectionTitle';
import './Gallery.css';

const Gallery = () => {
    return (
        <div className='my-10'>
            <SectionTitle heading="Gallery"></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10'>
                <div className='mx-auto'> <img className='w-full h-full' src="https://about.fb.com/wp-content/uploads/2020/04/Grad_edit3.jpg" alt="" /></div>
                <div className='mx-auto'> <img className='w-full h-full' src="https://c8.alamy.com/comp/FTKKM8/female-graduate-student-in-a-black-graduation-gown-holding-a-diploma-FTKKM8.jpg" alt="" /></div>
                <div className='mx-auto'> <img className='w-full h-full' src="https://media.istockphoto.com/id/143071519/photo/smiling-graduates-hugging-outdoors.jpg?s=612x612&w=0&k=20&c=-pVb1Rd8f7dusgJv2x6Z3PgspXjSkz9pDLwWnQjO5d0=" alt="" /></div>
                <div className='mx-auto'> <img className='w-full h-full' src="https://cf.ltkcdn.net/teens/images/orig/292764-2121x1414-graduation-day.jpg" alt="" /></div>
                <div className='mx-auto'> <img className='w-full h-full' src="https://media.istockphoto.com/id/475604711/photo/african-male-university-graduate.jpg?s=612x612&w=0&k=20&c=8FeDI3LPNeHCK1kIrup-wgg8KQanFitTrIB8KtxH8MA=" alt="" /></div>
                <div className='mx-auto'> <img className='w-full h-full' src="https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2016/Graduation-photo-tips/Media/Graduation-photos-2-girlfriends.jpg" alt="" /></div>
                
            </div>
        </div>
    );
};

export default Gallery;