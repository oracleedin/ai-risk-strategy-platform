import type { RiskRule } from '../types';

export const mockRules: RiskRule[] = [
  // RULE001: 高频退款风险
  {
    id: 'RULE001',
    name: '高频退款风险',
    scenario: '恶意退款',
    description: '识别短时间内多次发起退款且退款模式异常的用户。',
    conditions: [
      {
        field: '7天内退款次数',
        operator: '>=',
        value: 3,
        description: '7 天内退款次数 >= 3',
      },
      {
        field: '退款理由相似度',
        operator: '>=',
        value: '80%',
        description: '退款理由相似度 >= 80%',
      },
      {
        field: '已完成订单占比',
        operator: '>=',
        value: '50%',
        description: '已完成订单占比 >= 50%',
      },
    ],
    logic: 'AND',
    riskLevel: '高风险',
    action: '进入人工复核',
    enabled: true,
    version: 'v2.1',
    hitCount7d: 184,
    accuracy: 86,
    falsePositiveRate: 5.2,
  },

  // RULE002: 退款理由相似规则
  {
    id: 'RULE002',
    name: '退款理由相似规则',
    scenario: '恶意退款',
    description: '识别多次使用高度相似退款理由的用户。',
    conditions: [
      {
        field: '退款理由相似度',
        operator: '>=',
        value: '80%',
        description: '退款理由相似度 >= 80%',
      },
      {
        field: '14天内售后次数',
        operator: '>=',
        value: 3,
        description: '14 天内售后次数 >= 3',
      },
    ],
    logic: 'AND',
    riskLevel: '中风险',
    action: '加入观察名单',
    enabled: true,
    version: 'v2.1',
    hitCount7d: 132,
    accuracy: 78,
    falsePositiveRate: 7.4,
  },

  // RULE003: 商家订单异常增长规则
  {
    id: 'RULE003',
    name: '商家订单异常增长规则',
    scenario: '商家刷单',
    description: '识别短时间内订单量异常暴涨的商家。',
    conditions: [
      {
        field: '24小时订单增长率',
        operator: '>=',
        value: '200%',
        description: '24 小时订单增长率 >= 200%',
      },
      {
        field: '新客占比',
        operator: '>=',
        value: '85%',
        description: '新客占比 >= 85%',
      },
    ],
    logic: 'AND',
    riskLevel: '高风险',
    action: '升级二线审核',
    enabled: true,
    version: 'v2.1',
    hitCount7d: 96,
    accuracy: 82,
    falsePositiveRate: 6.1,
  },

  // RULE004: 评价内容相似规则
  {
    id: 'RULE004',
    name: '评价内容相似规则',
    scenario: '商家刷单',
    description: '识别评价文本高度相似且时间集中出现的商家。',
    conditions: [
      {
        field: '评价文本相似度',
        operator: '>=',
        value: '75%',
        description: '评价文本相似度 >= 75%',
      },
      {
        field: '3日新增评价数',
        operator: '>=',
        value: 30,
        description: '3 日新增评价数 >= 30',
      },
    ],
    logic: 'AND',
    riskLevel: '中风险',
    action: '进入人工复核',
    enabled: true,
    version: 'v2.1',
    hitCount7d: 118,
    accuracy: 80,
    falsePositiveRate: 6.8,
  },

  // RULE005: 新客补贴异常规则
  {
    id: 'RULE005',
    name: '新客补贴异常规则',
    scenario: '补贴薅羊毛',
    description: '识别新注册账号集中领取高额补贴并存在设备关联的行为。',
    conditions: [
      {
        field: '账号注册时间',
        operator: '<=',
        value: '3天',
        description: '账号注册时间 <= 3 天',
      },
      {
        field: '高额补贴使用次数',
        operator: '>=',
        value: 2,
        description: '高额补贴使用次数 >= 2',
      },
      {
        field: '同设备关联账号数',
        operator: '>=',
        value: 3,
        description: '同设备关联账号数 >= 3',
      },
    ],
    logic: 'AND',
    riskLevel: '高风险',
    action: '拦截',
    enabled: true,
    version: 'v2.1',
    hitCount7d: 156,
    accuracy: 88,
    falsePositiveRate: 4.3,
  },

  // RULE006: 商品违规关键词规则
  {
    id: 'RULE006',
    name: '商品违规关键词规则',
    scenario: '商品违规',
    description: '识别商品标题或描述中的高风险违规关键词。',
    conditions: [
      {
        field: '商品描述',
        operator: 'contains',
        value: '高仿',
        description: '商品描述 contains 高仿',
      },
      {
        field: '商品描述',
        operator: 'contains',
        value: '原单',
        description: '商品描述 contains 原单',
      },
      {
        field: '商品标题',
        operator: 'contains',
        value: '专柜同款',
        description: '商品标题 contains 专柜同款',
      },
    ],
    logic: 'OR',
    riskLevel: '高风险',
    action: '拦截并人工复核',
    enabled: true,
    version: 'v2.1',
    hitCount7d: 203,
    accuracy: 84,
    falsePositiveRate: 5.7,
  },
];