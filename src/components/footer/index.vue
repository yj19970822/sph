<template>
  <div class="footer-container">
    <div class="footer-body">
      <ul>
        <strong>购物指南</strong>
        <li>购物流程</li>
        <li>会员介绍</li>
        <li>生活旅行/团购</li>
        <li>常见问题</li>
        <li>购物指南</li>
      </ul>
      <ul>
        <strong>配送方式</strong>
        <li>上门自提</li>
        <li>211限时达</li>
        <li>配送服务查询</li>
        <li>配送费收取标准</li>
        <li>海外配送</li>
      </ul>
      <ul>
        <strong>支付方式</strong>
        <li>货到付款</li>
        <li>在线支付</li>
        <li>分期付款</li>
        <li>邮局汇款</li>
        <li>公司转账</li>
      </ul>
      <ul>
        <strong>售后服务</strong>
        <li>售后政策</li>
        <li>价格保护</li>
        <li>退款说明</li>
        <li>返修/退换货</li>
        <li>取消订单</li>
      </ul>
      <ul>
        <strong>特色服务</strong>
        <li>夺宝岛</li>
        <li>DIY装机</li>
        <li>延保服务</li>
        <li>E卡</li>
        <li>通信</li>
      </ul>
    </div>
    <div class="footer-bottom">
      <span class="rightBorder">关于我们</span>
      <span class="rightBorder">联系我们</span>
      <span class="rightBorder">商家入驻</span>
      <span class="rightBorder">营销中心</span>
      <span class="rightBorder">友情连接</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer-container {
  background-color: $pray;
  position: absolute;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.footer-body {
  display: flex;
  flex-direction: row;
  padding: 0 50px;
  border-bottom: 1px solid #a5a4a2;
  ul {
    padding: 50px 50px;
    strong {
      display: inline-block;
    }
    li {
      padding: 3px 0;
    }
  }
}
.footer-bottom {
  padding: 10px 10px 50px;
  span {
    padding: 0 10px;
  }
}
</style>
