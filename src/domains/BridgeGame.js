const { validate } = require('../validators');
const Bridge = require('./Bridge');
const Moving = require('./Moving');
const Player = require('./Player');

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /** @type {Bridge} */
  #bridge;

  /** @type {Player} */
  #player;

  /** @type {number} */
  #trialCount = 0;

  /**
   * @param {Bridge} bridge
   */
  constructor(bridge) {
    this.#bridge = validate(bridge).shouldInstanceOf(Bridge).get();
    this.#start();
  }

  /**
   * 게임을 시작하는 메서드
   */
  #start() {
    this.#player = new Player(this.#bridge);
    this.#trialCount += 1;
  }

  /**
   * 플레이어의 움직임 기록을 반환하는 메서드
   *
   * @returns {Moving[]}
   */
  getMovingHistory() {
    return this.#player.getMovingHistory();
  }

  /**
   * 시도 횟수를 반환하는 메서드
   *
   * @returns {number}
   */
  getTrialCount() {
    return this.#trialCount;
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   *
   * @param {string} tile
   */
  move(tile) {
    return this.#player.move(tile);
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   */
  retry() {
    this.#start();
  }
}

module.exports = BridgeGame;
