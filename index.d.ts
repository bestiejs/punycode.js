declare namespace punycode {

	export const version: string;

	export function decode(input: string): string;

	export function encode(input: string): string;

	export function toASCII(input: string): string;

	export function toUnicode(input: string): string;

	export namespace ucs2  {
		function decode(string: string): number[];

		function encode(array: number[]): string;

	}

}
