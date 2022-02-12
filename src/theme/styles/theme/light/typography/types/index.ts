export type FontFamily = {
  fontFamily: string;
  fontWeight: number;
  fontStyle: string;
};

export type Family = {
  /**
   * @string `Fira Sans`
   * @object {
   *
   * * `regular: FiraSans-Regular`
   * * `medium: FiraSans-Medium`
   * * `semiBold: FiraSans-SemiBold`
   *
   * }
   */
  default: {
    /**
     * @object {
     *
     * * `fontFamily: FiraSans-Regular`
     * * `fontWeight: 400`
     * * `fontStyle: normal`
     *
     * }
     */
    regular: FontFamily;
    /**
     * @object {
     *
     * * `fontFamily: FiraSans-Medium`
     * * `fontWeight: 500`
     * * `fontStyle: normal`
     *
     * }
     */
    medium: FontFamily;
    /**
     * @object {
     *
     * * `fontFamily: FiraSans-SemiBold`
     * * `fontWeight: 600`
     * * `fontStyle: normal`
     *
     * }
     */
    semiBold: FontFamily;
  };
};

export type Size = {
  /**
   * @number `14 [14px]`
   */
  xs: number;
  /**
   * @number `16 [16px]`
   */
  sm: number;
  /**
   * @number `18 [18px]`
   */
  md: number;
  /**
   * @number `22 [22px]`
   */
  lg: number;
  /**
   * @number `28 [28px]`
   */
  xl: number;
  /**
   * @number `12 [12px]`
   */
  '2xs': number;
};

export type LineHeight = {
  /**
   * @number `115 [115px]`
   */
  md: number;
  /**
   * @number `150 [150px]`
   */
  xs: number;
};

export type Typography = {
  /**
   * @object {
   *
   * * `default: Fira Sans`
   *
   * }
   */
  family: Family;
  /**
   * @object {
   *
   * * `xs:  14  [14px] `
   * * `sm:  16  [16px] `
   * * `md:  18  [18px] `
   * * `lg:  22  [22px] `
   * * `xl:  28  [28px] `
   * * `2xs: 12  [12px] `
   *
   * }
   */
  size: Size;
  /**
   * @object {
   *
   * * `md: 115 [115px]`
   * * `xs: 150 [150px]`
   *
   * }
   */
  lineHeight: LineHeight;
};
