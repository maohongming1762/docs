export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Home","i":"home"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"t":"Features demo","i":"laptop-code"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"t":"Disabling layout and features","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"t":"Encryption Article","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"t":"Layout","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"t":"Markdown Enhance","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"t":"Page Config","i":"file","O":3} }],
  ["/product-overview/", { loader: () => import(/* webpackChunkName: "product-overview_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/product-overview/index.html.js"), meta: {"t":"HyperBDR Product Overview"} }],
  ["/product-training/", { loader: () => import(/* webpackChunkName: "product-training_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/product-training/index.html.js"), meta: {"t":""} }],
  ["/product-training/product-overview.html", { loader: () => import(/* webpackChunkName: "product-training_product-overview.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/product-training/product-overview.html.js"), meta: {"t":"Product Overview"} }],
  ["/product-training/project-delivery.html", { loader: () => import(/* webpackChunkName: "product-training_project-delivery.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/product-training/project-delivery.html.js"), meta: {"t":"Project Delivery"} }],
  ["/product-training/scenarios.html", { loader: () => import(/* webpackChunkName: "product-training_scenarios.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/product-training/scenarios.html.js"), meta: {"t":"Scenario"} }],
  ["/product-training/technical-highlights.html", { loader: () => import(/* webpackChunkName: "product-training_technical-highlights.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/product-training/technical-highlights.html.js"), meta: {"t":"Technical Highlights"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/index.html.js"), meta: {"t":"主页","i":"home"} }],
  ["/checklist/", { loader: () => import(/* webpackChunkName: "checklist_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/checklist/index.html.js"), meta: {"t":"Checklist","i":"book"} }],
  ["/checklist/dr-checklist.html", { loader: () => import(/* webpackChunkName: "checklist_dr-checklist.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/checklist/dr-checklist.html.js"), meta: {"t":"DR Checklist"} }],
  ["/product-overview/limitations/linux-agent.html", { loader: () => import(/* webpackChunkName: "product-overview_limitations_linux-agent.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/product-overview/limitations/linux-agent.html.js"), meta: {"t":"Linux Agent"} }],
  ["/product-overview/limitations/openstack-ceph-agentless.html", { loader: () => import(/* webpackChunkName: "product-overview_limitations_openstack-ceph-agentless.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/product-overview/limitations/openstack-ceph-agentless.html.js"), meta: {"t":"OpenStack(Ceph) Agentless"} }],
  ["/product-overview/limitations/vmware-agentless.html", { loader: () => import(/* webpackChunkName: "product-overview_limitations_vmware-agentless.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/product-overview/limitations/vmware-agentless.html.js"), meta: {"t":"VMware Agentless"} }],
  ["/product-overview/limitations/windows-agent.html", { loader: () => import(/* webpackChunkName: "product-overview_limitations_windows-agent.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/product-overview/limitations/windows-agent.html.js"), meta: {"t":"Windows Agent"} }],
  ["/product-overview/operation/upgrade-manual.html", { loader: () => import(/* webpackChunkName: "product-overview_operation_upgrade-manual.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/product-overview/operation/upgrade-manual.html.js"), meta: {"t":"HyperBDR Upgrade Manual"} }],
  ["/zh/checklist/", { loader: () => import(/* webpackChunkName: "zh_checklist_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/checklist/index.html.js"), meta: {"t":"云容灾检查清单","i":"book"} }],
  ["/zh/checklist/dr-checklist.html", { loader: () => import(/* webpackChunkName: "zh_checklist_dr-checklist.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/checklist/dr-checklist.html.js"), meta: {"t":"云容灾检查清单"} }],
  ["/zh/demo/", { loader: () => import(/* webpackChunkName: "zh_demo_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/demo/index.html.js"), meta: {"t":"主要功能与配置演示","i":"laptop-code"} }],
  ["/zh/demo/disable.html", { loader: () => import(/* webpackChunkName: "zh_demo_disable.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/demo/disable.html.js"), meta: {"t":"布局与功能禁用","i":"gears","O":4} }],
  ["/zh/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "zh_demo_encrypt.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/demo/encrypt.html.js"), meta: {"t":"密码加密的文章","i":"lock"} }],
  ["/zh/demo/layout.html", { loader: () => import(/* webpackChunkName: "zh_demo_layout.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/demo/layout.html.js"), meta: {"t":"布局","i":"object-group","O":2} }],
  ["/zh/demo/markdown.html", { loader: () => import(/* webpackChunkName: "zh_demo_markdown.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/demo/markdown.html.js"), meta: {"t":"Markdown 展示","i":"fab fa-markdown","O":2} }],
  ["/zh/demo/page.html", { loader: () => import(/* webpackChunkName: "zh_demo_page.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/demo/page.html.js"), meta: {"t":"页面配置","i":"file","O":3} }],
  ["/zh/guide/", { loader: () => import(/* webpackChunkName: "zh_guide_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/guide/index.html.js"), meta: {"t":"指南","i":"lightbulb"} }],
  ["/zh/product-overview/", { loader: () => import(/* webpackChunkName: "zh_product-overview_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/product-overview/index.html.js"), meta: {"t":"HyperBDR Product Overview"} }],
  ["/product-overview/features/features-matrix.html", { loader: () => import(/* webpackChunkName: "product-overview_features_features-matrix.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/product-overview/features/features-matrix.html.js"), meta: {"t":"About Features Matrix"} }],
  ["/zh/product-training/", { loader: () => import(/* webpackChunkName: "zh_product-training_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/product-training/index.html.js"), meta: {"t":""} }],
  ["/zh/product-training/product-overview.html", { loader: () => import(/* webpackChunkName: "zh_product-training_product-overview.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/product-training/product-overview.html.js"), meta: {"t":"Product Overview"} }],
  ["/zh/product-training/project-delivery.html", { loader: () => import(/* webpackChunkName: "zh_product-training_project-delivery.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/product-training/project-delivery.html.js"), meta: {"t":"Project Delivery"} }],
  ["/zh/product-training/scenarios.html", { loader: () => import(/* webpackChunkName: "zh_product-training_scenarios.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/product-training/scenarios.html.js"), meta: {"t":"Scenario"} }],
  ["/zh/product-training/technical-highlights.html", { loader: () => import(/* webpackChunkName: "zh_product-training_technical-highlights.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/product-training/technical-highlights.html.js"), meta: {"t":"Technical Highlights"} }],
  ["/userguide/", { loader: () => import(/* webpackChunkName: "userguide_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/index.html.js"), meta: {"t":"HyperBDR User Guide"} }],
  ["/zh/userguide/", { loader: () => import(/* webpackChunkName: "zh_userguide_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/index.html.js"), meta: {"t":"HyperBDR 文档中心"} }],
  ["/zh/guide/bar/", { loader: () => import(/* webpackChunkName: "zh_guide_bar_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/guide/bar/index.html.js"), meta: {"t":"Bar 功能","i":"lightbulb"} }],
  ["/zh/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "zh_guide_bar_baz.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/guide/bar/baz.html.js"), meta: {"t":"Baz","i":"circle-info"} }],
  ["/zh/product-overview/features/features-matrix.html", { loader: () => import(/* webpackChunkName: "zh_product-overview_features_features-matrix.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/product-overview/features/features-matrix.html.js"), meta: {"t":"About Features Matrix"} }],
  ["/zh/product-overview/operation/upgrade-manual.html", { loader: () => import(/* webpackChunkName: "zh_product-overview_operation_upgrade-manual.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/product-overview/operation/upgrade-manual.html.js"), meta: {"t":"HyperBDR Upgrade Manual"} }],
  ["/zh/product-overview/limitations/linux-agent.html", { loader: () => import(/* webpackChunkName: "zh_product-overview_limitations_linux-agent.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/product-overview/limitations/linux-agent.html.js"), meta: {"t":"Linux Agent"} }],
  ["/zh/product-overview/limitations/openstack-ceph-agentless.html", { loader: () => import(/* webpackChunkName: "zh_product-overview_limitations_openstack-ceph-agentless.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/product-overview/limitations/openstack-ceph-agentless.html.js"), meta: {"t":"OpenStack(Ceph) Agentless"} }],
  ["/zh/product-overview/limitations/vmware-agentless.html", { loader: () => import(/* webpackChunkName: "zh_product-overview_limitations_vmware-agentless.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/product-overview/limitations/vmware-agentless.html.js"), meta: {"t":"VMware Agentless"} }],
  ["/zh/product-overview/limitations/windows-agent.html", { loader: () => import(/* webpackChunkName: "zh_product-overview_limitations_windows-agent.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/product-overview/limitations/windows-agent.html.js"), meta: {"t":"Windows Agent"} }],
  ["/zh/guide/foo/", { loader: () => import(/* webpackChunkName: "zh_guide_foo_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/guide/foo/index.html.js"), meta: {"t":"Foo 功能","i":"lightbulb"} }],
  ["/zh/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "zh_guide_foo_ray.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/guide/foo/ray.html.js"), meta: {"t":"Ray","i":"circle-info"} }],
  ["/userguide/dr-usage-guide/", { loader: () => import(/* webpackChunkName: "userguide_dr-usage-guide_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/dr-usage-guide/index.html.js"), meta: {"t":"HyperBDR User Manual"} }],
  ["/userguide/dr-usage-guide/dr-operations-manual-hcs8-block.html", { loader: () => import(/* webpackChunkName: "userguide_dr-usage-guide_dr-operations-manual-hcs8-block.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/dr-usage-guide/dr-operations-manual-hcs8-block.html.js"), meta: {"t":"DR Operations Manual Block Storage"} }],
  ["/userguide/dr-usage-guide/dr-operations-manual-huaweicloud-block.html", { loader: () => import(/* webpackChunkName: "userguide_dr-usage-guide_dr-operations-manual-huaweicloud-block.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/dr-usage-guide/dr-operations-manual-huaweicloud-block.html.js"), meta: {"t":"DR Operations Manual Block Storage"} }],
  ["/userguide/dr-usage-guide/dr-operations-manual-huaweicloud-object.html", { loader: () => import(/* webpackChunkName: "userguide_dr-usage-guide_dr-operations-manual-huaweicloud-object.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/dr-usage-guide/dr-operations-manual-huaweicloud-object.html.js"), meta: {"t":"DR Operations Manual Object Storage"} }],
  ["/userguide/dr-usage-guide/dr-operations-manual-tmcae-block.html", { loader: () => import(/* webpackChunkName: "userguide_dr-usage-guide_dr-operations-manual-tmcae-block.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/dr-usage-guide/dr-operations-manual-tmcae-block.html.js"), meta: {"t":"I. Disaster Recovery Scenario Overview"} }],
  ["/userguide/dr-usage-guide/dr-operations-manual-tmcae-object.html", { loader: () => import(/* webpackChunkName: "userguide_dr-usage-guide_dr-operations-manual-tmcae-object.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/dr-usage-guide/dr-operations-manual-tmcae-object.html.js"), meta: {"t":"DR Operations Manual Object Storage"} }],
  ["/userguide/checklist/", { loader: () => import(/* webpackChunkName: "userguide_checklist_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/checklist/index.html.js"), meta: {"t":"HyperBDR Checklist"} }],
  ["/userguide/checklist/dr-checklist.html", { loader: () => import(/* webpackChunkName: "userguide_checklist_dr-checklist.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/checklist/dr-checklist.html.js"), meta: {"t":"DR Checklist"} }],
  ["/userguide/faq/", { loader: () => import(/* webpackChunkName: "userguide_faq_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/faq/index.html.js"), meta: {"t":"HyperBDR FAQ"} }],
  ["/userguide/faq/collect-logs.html", { loader: () => import(/* webpackChunkName: "userguide_faq_collect-logs.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/faq/collect-logs.html.js"), meta: {"t":"Collection Log Guide"} }],
  ["/userguide/faq/configure-vpn-huaweicloud.html", { loader: () => import(/* webpackChunkName: "userguide_faq_configure-vpn-huaweicloud.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/faq/configure-vpn-huaweicloud.html.js"), meta: {"t":"Configure the VPN connection between Huawei Cloud and IDC"} }],
  ["/userguide/faq/faq.html", { loader: () => import(/* webpackChunkName: "userguide_faq_faq.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/faq/faq.html.js"), meta: {"t":"FAQ"} }],
  ["/userguide/poc/", { loader: () => import(/* webpackChunkName: "userguide_poc_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/poc/index.html.js"), meta: {"t":"HyperBDR Huawei Cloud POC User Guide"} }],
  ["/userguide/poc/agent-pre-settings.html", { loader: () => import(/* webpackChunkName: "userguide_poc_agent-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/poc/agent-pre-settings.html.js"), meta: {"t":"Agent Pre-Settings"} }],
  ["/userguide/poc/aws-pre-settings.html", { loader: () => import(/* webpackChunkName: "userguide_poc_aws-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/poc/aws-pre-settings.html.js"), meta: {"t":"AWS Pre-Settings(RC)"} }],
  ["/userguide/poc/failback-agent-pre-settings.html", { loader: () => import(/* webpackChunkName: "userguide_poc_failback-agent-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/poc/failback-agent-pre-settings.html.js"), meta: {"t":"Agent Pre-Settings"} }],
  ["/userguide/poc/failback-agent-source-pre-settings.html", { loader: () => import(/* webpackChunkName: "userguide_poc_failback-agent-source-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/poc/failback-agent-source-pre-settings.html.js"), meta: {"t":"General Platform Setup"} }],
  ["/userguide/poc/failback-hyperbdr-pre-settings.html", { loader: () => import(/* webpackChunkName: "userguide_poc_failback-hyperbdr-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/poc/failback-hyperbdr-pre-settings.html.js"), meta: {"t":"HyperBDR Setup"} }],
  ["/userguide/poc/failback-network-requirement-huaweicloud.html", { loader: () => import(/* webpackChunkName: "userguide_poc_failback-network-requirement-huaweicloud.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/poc/failback-network-requirement-huaweicloud.html.js"), meta: {"t":"Huawei Cloud"} }],
  ["/userguide/poc/failback-network-requirement-tmcae.html", { loader: () => import(/* webpackChunkName: "userguide_poc_failback-network-requirement-tmcae.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/poc/failback-network-requirement-tmcae.html.js"), meta: {"t":"TM CAE"} }],
  ["/userguide/poc/failback-vmware-pre-settings.html", { loader: () => import(/* webpackChunkName: "userguide_poc_failback-vmware-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/poc/failback-vmware-pre-settings.html.js"), meta: {"t":"VMware Pre-Settings"} }],
  ["/userguide/poc/huaweicloud-pre-settings.html", { loader: () => import(/* webpackChunkName: "userguide_poc_huaweicloud-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/poc/huaweicloud-pre-settings.html.js"), meta: {"t":"Huawei Cloud Pre-Settings"} }],
  ["/userguide/poc/hyperbdr-proxy-pre-settings.html", { loader: () => import(/* webpackChunkName: "userguide_poc_hyperbdr-proxy-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/poc/hyperbdr-proxy-pre-settings.html.js"), meta: {"t":"Sync Proxy Setup"} }],
  ["/userguide/poc/hyperbdr-vmware-pre-settings.html", { loader: () => import(/* webpackChunkName: "userguide_poc_hyperbdr-vmware-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/poc/hyperbdr-vmware-pre-settings.html.js"), meta: {"t":"HyperBDR Setup"} }],
  ["/userguide/poc/tmcae-pre-settings.html", { loader: () => import(/* webpackChunkName: "userguide_poc_tmcae-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/poc/tmcae-pre-settings.html.js"), meta: {"t":"TM CAE Pre-Settings"} }],
  ["/userguide/poc/vmware-pre-settings.html", { loader: () => import(/* webpackChunkName: "userguide_poc_vmware-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/poc/vmware-pre-settings.html.js"), meta: {"t":"VMware Pre-Settings"} }],
  ["/userguide/presales/", { loader: () => import(/* webpackChunkName: "userguide_presales_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/presales/index.html.js"), meta: {"t":"Pre-Sales"} }],
  ["/userguide/presales/aws-agentless-mode-cost-calculator.html", { loader: () => import(/* webpackChunkName: "userguide_presales_aws-agentless-mode-cost-calculator.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/presales/aws-agentless-mode-cost-calculator.html.js"), meta: {"t":"Deep in AWS Agentless Mode(RC)"} }],
  ["/userguide/presales/cloud-platform-support-matrix.html", { loader: () => import(/* webpackChunkName: "userguide_presales_cloud-platform-support-matrix.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/presales/cloud-platform-support-matrix.html.js"), meta: {"t":"Cloud Platform Support Matrix"} }],
  ["/userguide/presales/compatibility-and-limitations.html", { loader: () => import(/* webpackChunkName: "userguide_presales_compatibility-and-limitations.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/presales/compatibility-and-limitations.html.js"), meta: {"t":"Compatibility & Limitations"} }],
  ["/userguide/presales/dr-network-planning-recommendations.html", { loader: () => import(/* webpackChunkName: "userguide_presales_dr-network-planning-recommendations.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/presales/dr-network-planning-recommendations.html.js"), meta: {"t":""} }],
  ["/userguide/presales/hyperbdr-agent-investigation.html", { loader: () => import(/* webpackChunkName: "userguide_presales_hyperbdr-agent-investigation.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/presales/hyperbdr-agent-investigation.html.js"), meta: {"t":"Host Quick Investigation"} }],
  ["/userguide/presales/hyperbdr-license-purchasing-guide.html", { loader: () => import(/* webpackChunkName: "userguide_presales_hyperbdr-license-purchasing-guide.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/presales/hyperbdr-license-purchasing-guide.html.js"), meta: {"t":"HyperBDR License Purchasing Guide"} }],
  ["/userguide/presales/hyperbdr-rpo-rto-planning-best-practices.html", { loader: () => import(/* webpackChunkName: "userguide_presales_hyperbdr-rpo-rto-planning-best-practices.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/presales/hyperbdr-rpo-rto-planning-best-practices.html.js"), meta: {"t":"RPO & RTO Best Practices"} }],
  ["/userguide/presales/hyperbdr-vmware-investigation.html", { loader: () => import(/* webpackChunkName: "userguide_presales_hyperbdr-vmware-investigation.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/presales/hyperbdr-vmware-investigation.html.js"), meta: {"t":"VMware Quick Investigation"} }],
  ["/userguide/presales/poc.html", { loader: () => import(/* webpackChunkName: "userguide_presales_poc.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/userguide/presales/poc.html.js"), meta: {"t":"Proof of Concept"} }],
  ["/zh/userguide/dr-usage-guide/", { loader: () => import(/* webpackChunkName: "zh_userguide_dr-usage-guide_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/dr-usage-guide/index.html.js"), meta: {"t":"HyperBDR User Manual"} }],
  ["/zh/userguide/dr-usage-guide/dr-operations-manual-huaweicloud.html", { loader: () => import(/* webpackChunkName: "zh_userguide_dr-usage-guide_dr-operations-manual-huaweicloud.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/dr-usage-guide/dr-operations-manual-huaweicloud.html.js"), meta: {"t":"云容灾操作手册（华为云对象存储）"} }],
  ["/zh/userguide/faq/collect-logs.html", { loader: () => import(/* webpackChunkName: "zh_userguide_faq_collect-logs.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/faq/collect-logs.html.js"), meta: {"t":"日志收集指南"} }],
  ["/zh/userguide/faq/faq.html", { loader: () => import(/* webpackChunkName: "zh_userguide_faq_faq.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/faq/faq.html.js"), meta: {"t":"FAQ"} }],
  ["/zh/userguide/poc/", { loader: () => import(/* webpackChunkName: "zh_userguide_poc_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/poc/index.html.js"), meta: {"t":"HyperBDR 华为云 POC 用户指南"} }],
  ["/zh/userguide/poc/agent-pre-settings.html", { loader: () => import(/* webpackChunkName: "zh_userguide_poc_agent-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/poc/agent-pre-settings.html.js"), meta: {"t":"Agent主机源端预设置"} }],
  ["/zh/userguide/poc/failback-agent-pre-settings.html", { loader: () => import(/* webpackChunkName: "zh_userguide_poc_failback-agent-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/poc/failback-agent-pre-settings.html.js"), meta: {"t":"Agent主机源端预设置"} }],
  ["/zh/userguide/poc/failback-agent-source-pre-settings.html", { loader: () => import(/* webpackChunkName: "zh_userguide_poc_failback-agent-source-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/poc/failback-agent-source-pre-settings.html.js"), meta: {"t":"通用平台目标端部署与配置"} }],
  ["/zh/userguide/poc/failback-hyperbdr-pre-settings.html", { loader: () => import(/* webpackChunkName: "zh_userguide_poc_failback-hyperbdr-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/poc/failback-hyperbdr-pre-settings.html.js"), meta: {"t":"HyperBDR部署与配置"} }],
  ["/zh/userguide/poc/failback-network-requirement-huaweicloud.html", { loader: () => import(/* webpackChunkName: "zh_userguide_poc_failback-network-requirement-huaweicloud.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/poc/failback-network-requirement-huaweicloud.html.js"), meta: {"t":"华为云"} }],
  ["/zh/userguide/poc/failback-vmware-pre-settings.html", { loader: () => import(/* webpackChunkName: "zh_userguide_poc_failback-vmware-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/poc/failback-vmware-pre-settings.html.js"), meta: {"t":"VMware目标端预设置"} }],
  ["/zh/userguide/poc/huaweicloud-pre-settings.html", { loader: () => import(/* webpackChunkName: "zh_userguide_poc_huaweicloud-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/poc/huaweicloud-pre-settings.html.js"), meta: {"t":"华为云预设置"} }],
  ["/zh/userguide/poc/hyperbdr-proxy-pre-settings.html", { loader: () => import(/* webpackChunkName: "zh_userguide_poc_hyperbdr-proxy-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/poc/hyperbdr-proxy-pre-settings.html.js"), meta: {"t":"同步节点Proxy部署与配置"} }],
  ["/zh/userguide/poc/hyperbdr-vmware-pre-settings.html", { loader: () => import(/* webpackChunkName: "zh_userguide_poc_hyperbdr-vmware-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/poc/hyperbdr-vmware-pre-settings.html.js"), meta: {"t":"HyperBDR部署与配置"} }],
  ["/zh/userguide/poc/vmware-pre-settings.html", { loader: () => import(/* webpackChunkName: "zh_userguide_poc_vmware-pre-settings.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/poc/vmware-pre-settings.html.js"), meta: {"t":"VMware源端无代理预设置"} }],
  ["/zh/userguide/presales/", { loader: () => import(/* webpackChunkName: "zh_userguide_presales_index.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/presales/index.html.js"), meta: {"t":"售前"} }],
  ["/zh/userguide/presales/cloud-platform-support-matrix.html", { loader: () => import(/* webpackChunkName: "zh_userguide_presales_cloud-platform-support-matrix.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/presales/cloud-platform-support-matrix.html.js"), meta: {"t":"云平台支持矩阵"} }],
  ["/zh/userguide/presales/dr-network-planning-recommendations.html", { loader: () => import(/* webpackChunkName: "zh_userguide_presales_dr-network-planning-recommendations.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/presales/dr-network-planning-recommendations.html.js"), meta: {"t":""} }],
  ["/zh/userguide/presales/hyperbdr-agent-investigation.html", { loader: () => import(/* webpackChunkName: "zh_userguide_presales_hyperbdr-agent-investigation.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/presales/hyperbdr-agent-investigation.html.js"), meta: {"t":"源端Agent主机快速调研"} }],
  ["/zh/userguide/presales/hyperbdr-rpo-rto-planning-best-practices.html", { loader: () => import(/* webpackChunkName: "zh_userguide_presales_hyperbdr-rpo-rto-planning-best-practices.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/presales/hyperbdr-rpo-rto-planning-best-practices.html.js"), meta: {"t":"RPO & RTO 最佳实践"} }],
  ["/zh/userguide/presales/hyperbdr-vmware-investigation.html", { loader: () => import(/* webpackChunkName: "zh_userguide_presales_hyperbdr-vmware-investigation.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/zh/userguide/presales/hyperbdr-vmware-investigation.html.js"), meta: {"t":"源端VMware主机快速调研"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/root/workspace/new/docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);