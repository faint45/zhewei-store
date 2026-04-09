#!/bin/bash
# 部署 zhewei-store 到 GX10
# 使用方式: bash deploy-gx10.sh

set -e

GX10="kai@192.168.1.120"
REMOTE_DIR="~/zhewei-store"
CONTAINER_NAME="zhewei-store"
IMAGE_NAME="zhewei-store:latest"
PORT=4200

echo "▶ 建立 Docker image..."
docker build -t $IMAGE_NAME .

echo "▶ 儲存 image 為 tar..."
docker save $IMAGE_NAME | gzip > /tmp/zhewei-store.tar.gz

echo "▶ 上傳 image 到 GX10..."
scp /tmp/zhewei-store.tar.gz $GX10:/tmp/

echo "▶ 在 GX10 上載入並啟動..."
ssh $GX10 << 'ENDSSH'
  docker load < /tmp/zhewei-store.tar.gz

  # 停止舊的 container（如果存在）
  docker stop zhewei-store 2>/dev/null || true
  docker rm zhewei-store 2>/dev/null || true

  # 啟動新 container
  docker run -d \
    --name zhewei-store \
    --restart unless-stopped \
    -p 4200:80 \
    zhewei-store:latest

  echo "✓ zhewei-store 已在 port 4200 啟動"
  docker ps | grep zhewei-store
ENDSSH

echo ""
echo "✅ 部署完成！"
echo "   GX10 本地:  http://192.168.1.120:4200"
echo "   對外網域:   https://store.zhe-wei.net (需在 CF Tunnel 加 store → localhost:4200)"
echo ""
echo "▶ Cloudflare Tunnel 設定提醒："
echo "   登入 https://one.dash.cloudflare.com"
echo "   Networks → Tunnels → 選 GX10 tunnel"
echo "   Public Hostname 加一筆:"
echo "     Subdomain: store"
echo "     Domain: zhe-wei.net"
echo "     Service: http://localhost:4200"

# 清理暫存
rm /tmp/zhewei-store.tar.gz
