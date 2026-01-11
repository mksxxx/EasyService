'use strict';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Configuração necessária para localizar os arquivos SQL em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function setup(options) {
  // O db-migrate injeta as dependências aqui se necessário
}

export function up(db) {
  const filePath = path.join(__dirname, 'sqls', '20260110175334-create-users-table-up.sql');
  
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  }).then((data) => {
    return db.runSql(data);
  });
}

export function down(db) {
  const filePath = path.join(__dirname, 'sqls', '20260110175334-create-users-table-down.sql');
  
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  }).then((data) => {
    return db.runSql(data);
  });
}

export const _meta = {
  "version": 1
};