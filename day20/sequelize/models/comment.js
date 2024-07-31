const Sequelize = require('sequelize');
const express = require('express');

// Comment 모델 정의
class Comment extends Sequelize.Model {
  // 모델 초기화 메서드
  static initiate(sequelize) {
    Comment.init(
      {
        // 코멘트 내용
        comment: {
          type: Sequelize.STRING(100), // 문자열 타입, 최대 100자
          allowNull: false, // 필수 입력 필드
        },
        // 생성 일자
        createdAt: {
          type: Sequelize.DATE, // 날짜 타입
          allowNull: true, // null 허용
          defaultValue: Sequelize.NOW, // 기본값으로 현재 시간
        },
      },
      {
        sequelize, // Sequelize 인스턴스
        timestamps: false, // timestamps 자동 생성 비활성화
        modelName: 'Comment', // 모델 이름 설정
        tableName: 'comment2', // 테이블 이름 설정 (기본적으로 모델 이름의 복수형으로 설정됨)
        paranoid: false, // soft delete 기능 비활성화
        charset: 'utf8mb4', // 문자셋 설정 (한글을 포함한 다양한 문자 지원)
        collate: 'utf8mb4_general_ci', // 정렬 및 비교 설정 (한글을 올바르게 처리하기 위한 설정)
      }
    );
  }

  // 모델 간의 연관 관계 설정
  static associate(db) {
    // Comment 모델은 User 모델에 속함
    db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });
  }
}

module.exports = Comment; // Comment 모델을 모듈로 내보냄
