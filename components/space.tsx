import styled from '@emotion/styled';

export type SizeType = number | number[];

export interface SpaceProps {
  className?: string;
  inside?: boolean;
  spaceSize?: SizeType;
  size: SizeType;
  sizeTop?: number;
  sizeRight?: number;
  sizeBottom?: number;
  sizeLeft?: number;
}

interface StyledSpace {
  inside: boolean;
  spaceSize: SizeType;
}

export function getSpace(size) {
	if (undefined !== size) {
		return size;
	}
	return 0;
}

function expand(source) {
	const values = Array.isArray(source) ? source : [source];

	switch (values.length) {
		case 1: // [a]          => [a, a, a, a]
			return [values[0], values[0], values[0], values[0]];
		case 2: // [a, b]       => [a, b, a, b]
			return [...values, ...values];
		case 3: // [a, b, c]    => [a, b, c, b]
			return [...values, values[1]];
		case 4: // [a, b, c, d] => [a, b, c, d]
		default:
			return values.slice(0, 4);
	}
}

function merge(shorthand, top, right, bottom, left) {
	const expanded = expand(shorthand);

	return [
		top === undefined ? expanded[0] : top,
		right === undefined ? expanded[1] : right,
		bottom === undefined ? expanded[2] : bottom,
		left === undefined ? expanded[3] : left
	];
}

function calculate(property, space) {
	const values = space.map(value => `${getSpace(value)}px`);
	const result = `${property}: ${values.join(' ')};`;

	return result;
}

const StyledSpace = styled.div`
	box-sizing: border-box;
  ${(props: StyledSpace) => calculate(props.inside
    ? 'padding'
    : 'margin',
    props.spaceSize)
  };
`;

export const Space: React.SFC<SpaceProps> = (props): JSX.Element => {
	const size = merge(
		props.size || 0,
		props.sizeTop,
		props.sizeRight,
		props.sizeBottom,
		props.sizeLeft
	);

	return (
		<StyledSpace className={props.className} spaceSize={size} inside={Boolean(props.inside)}>
			{props.children}
		</StyledSpace>
	);
};

export default Space;
