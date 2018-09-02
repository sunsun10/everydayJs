// 拉取优惠券。
updateCouponInfo() {
    if (this.props.skuInfo && this.props.skuInfo.id) {
        return AxiosUtil.get(
            `/api/coupon/findCanUseCoupon/${this.props.skuInfo.id}`
            )
                .then(res => {
                // 判断优惠券长度 并且默认选中第一张
                this.setState(
            {
                currentCoupon: res.length ? 0 : -1,
                myCouponList: res
            },
            () => {
                // 判断如果已经购买不进行默认选中
                res.length &&
            this.useCoupon({ clickIndex: this.props.bought ? -1 : 0 });
    }
    );
        // 更新
    })
    .catch(res => {
            alert(res.message);
        // wxUtil.showModal(res.message)
    });
    }
}

/*
这段代码，注释写的不错。业务上很清晰
几个判断写的非常非常简练。很流畅。三元用的很不错。
 */