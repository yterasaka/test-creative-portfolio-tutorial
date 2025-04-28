import React from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </Comp>
    );
  }
);

Bounded.displayName = "Bounded"; // `React.forwardRef()` を使用する場合は、デフォルトでは匿名の関数を返すため、`displayName` を設定する。
export default Bounded;

// Bounded は Storyblok でネスト可能なセクションブロックを作って共通のラッパーを使用していたのと同じようなもの
