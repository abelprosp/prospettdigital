# 🔥 Hot Reload - Atualização em Tempo Real

## ⚠️ IMPORTANTE: Use o modo de DESENVOLVIMENTO

Para ter atualizações em tempo real **SEM precisar fazer build**, você DEVE usar:

```bash
npm run dev
```

**NÃO use:**
```bash
npm start  # ❌ Isso é para PRODUÇÃO e requer build
```

## ✅ Como funciona

1. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

2. **Acesse:** `http://localhost:3000`

3. **Faça suas alterações** nos arquivos:
   - `components/**/*.tsx`
   - `app/**/*.tsx`
   - `app/globals.css`
   - `tailwind.config.ts`

4. **As mudanças aparecem INSTANTANEAMENTE** no navegador! 🎉

## 🚀 Otimizações Configuradas

- ✅ Fast Refresh habilitado
- ✅ Cache desabilitado em desenvolvimento
- ✅ Watch otimizado (verifica mudanças a cada 500ms)
- ✅ Recompilação automática sem rebuild completo

## 🔧 Se não estiver funcionando

1. **Pare o servidor** (Ctrl+C)
2. **Limpe o cache:**
   ```bash
   Remove-Item -Recurse -Force .next
   ```
3. **Reinicie:**
   ```bash
   npm run dev
   ```

## 📝 Diferença entre dev e start

- `npm run dev` → Modo DESENVOLVIMENTO (hot reload ativo)
- `npm start` → Modo PRODUÇÃO (requer `npm run build` primeiro)

