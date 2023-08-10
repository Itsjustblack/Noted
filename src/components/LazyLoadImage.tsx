import { useState } from "react";

interface LazyLoadImageProps {
	src: string;
	alt?: string;
	className?: string;
}

const LazyLoadImage = ({ src, alt, className }: LazyLoadImageProps) => {
	const [loading, setLoading] = useState(true);

	return (
		<img
			src={src}
			alt={alt || "an Image"}
			className={`${className} ${loading ? "blur-[4px]" : "blur-none"} transition duration-[1s] ease-linear`}
			onLoad={() => setLoading(false)}
		/>
	);
};

export default LazyLoadImage;
